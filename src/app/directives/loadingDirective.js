export default class LoadingDirective {
    /*@ngInject*/
    constructor() {
        this.template = '<div>I\'m a directive!</div>';
        this.restrict = 'AE';
        this.scope = {};

    }
}