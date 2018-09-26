class Compile{
    constructor(el,vm){
        this.el = this.isElementNode(el)?el:document.querySelector(el);
        this.vm = vm;
        if(this.el){
            //如果能获取到这个元素，我们就开始编译
        //    1、先把这些真实dom移动到内存中，变成文档碎片，fragment
            let fragment = this.node2fragment(this.el);
        // 2、编译，=> 提取想要的元素v-model和文本节点{{}}
            this.compile(fragment);
        //    把编译好的fragment放回到页面里去
            this.el.appendChild(fragment);
        }
    }
    //专门写一些辅助方法的
    isElementNode(node){
        return node.nodeType === 1;
    }
    //判断是不是指令
    isDirective(name) {
        return name.includes('v-');
    }
    // 核心方法
    // 编译元素
    compileElement(node){
        // 带v-model
        let attrs = node.attributes;
        //console.log(attrs,'attrs');
        // NamedNodeMap,如: 0: type 1: v-model
        Array.from(attrs).forEach(attr=>{
            //console.log(attr.name,'attr===');type,v-model
            // 判断属性名字是不是包含v-
            let attrName = attr.name;
            if(this.isDirective(attrName)){
                // 取到对应的值放到节点中
                let expr = attr.value;
                // 从类似的v-model里边拆出model来
                let [, type] = attrName.split('-');
                // node vm.$data v-model v-text v-html
                CompileUtil[type](node, this.vm, expr);
            }
        });
    }
    // 编译文本
    compileText(node){
        // 带 {{}}
        let expr = node.textContent; //取文本中的内容
        let reg = /\{\{([^}]+)\}\}/g; // {{a}} {{b}} {{c}}
        if (reg.test(expr)) {
            CompileUtil['text'](node, this.vm, expr);
        }
    }
    //核心的方法
    node2fragment(el){//将el中的内容全部放到内存中
        //文档碎片
        let fragment = document.createDocumentFragment();
        let firstChild;
        while(firstChild = el.firstChild){
            fragment.appendChild(firstChild);
        }
        return fragment;//内存中的节点
    }
    compile(fragment){
        //需要递归
        let childNodes = fragment.childNodes;
        //Array.from累数组转成数组
        Array.from(childNodes).forEach(node=>{
            if(this.isElementNode(node)){
                //是元素节点
                //如果是元素节点，进行深入的检查
                //这里需要编译元素
                this.compileElement(node);
                this.compile(node);
            } else {
                // 文本节点
                // 这里需要编译文本
                this.compileText(node);
            }
        });
    }
}

CompileUtil = {
    //获取实例上对应的value数据
    getVal(vm, expr) {
        expr = expr.split('.'); // [a,b,c,d]
        return expr.reduce((prev,next) => {// vm.$data.a
            return prev[next];//取到的结果作为下一次的prev
        }, vm.$data);//vm.$data这个参数作为prev
    },
    getTextVal(vm, expr) {
        return expr.replace(/\{\{([^}]+)\}\}/g,(...args) => {
            return this.getVal(vm, args[1]);
        });
    },
    text(node, vm, expr) { //文本处理
        let updateFn = this.updater['textUpdater'];
        // 'message.a' => [message, a]  vm.$data.message.a
        //获取文本编译后的结果
        let value = this.getTextVal(vm, expr);
        // {{a}}{{b}}
        expr.replace(/\{\{([^}]+)\}\}/g,(...args) => {
            new Watcher(vm, args[1], (newValue)=>{
                // 如果文本节点数据变化了，文本节点需要重新获取依赖的属性更新文本节点
                updateFn && updateFn(node, this.getTextVal(vm, expr));
            });
        });
        updateFn && updateFn(node, value);
    },
    setVal(vm, expr, value){    // [message, a]
        expr = expr.split('.');
        // 收敛
        return expr.reduce((prev,next, currentIndex) => {// vm.$data.a
            if (currentIndex === expr.length - 1) {
                return prev[next] = value;
            }
            return prev[next];//取到的结果作为下一次的prev
        }, vm.$data);
    },
    model(node, vm, expr) {  // 输入框处理
        let updateFn = this.updater['modelUpdater'];
        // 'message.a' => [message, a]  vm.$data.message.a
        // 这里加一个监控，数据变化了，应该调用watch的callback
        new Watcher(vm, expr, ()=>{
            // 当值变化后，会调用cb将新值传递过来（）
            updateFn && updateFn(node, this.getVal(vm, expr));
        });
        node.addEventListener('input', (e)=>{
            let newValue = e.target.value;
            this.setVal(vm, expr, newValue);
        })
        updateFn && updateFn(node, this.getVal(vm, expr));
    },   
    html() {
        // ....等等等
    },
    updater: {
        // 文本更新
        textUpdater (node, value) {
            node.textContent = value;
        },
        // 输入框更新
        modelUpdater(node, value) {
            node.value = value;
        },
        // htmlUpdater
        htmlUpdater() {
            // .....
        }
    }
}