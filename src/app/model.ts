export class Model {
    user;
    items;

    constructor() {
        this.user = "Adama";
        this.items = [new TodoItem("Kupić kwiaty", false),
        new TodoItem("Kupić buty", false),
        new TodoItem("odebrać bilety", false),
        new TodoItem("Zadzwonić do Janka", false),
    ];
    }
}

export class TodoItem {
    action;
    done;
    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}