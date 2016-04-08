"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var todo_service_1 = require("./todo-service");
var TodoInput = (function () {
    function TodoInput(todoService) {
        this.todoService = todoService;
    }
    TodoInput.prototype.onClick = function (event, value) {
        this.todoService.todos = '';
        console.log(event, value);
    };
    TodoInput.prototype.onLog = function (value) {
        this.todoService.todos = value;
        console.log(this.todoService.todos + ' length: ' + this.todoService.todos.length);
    };
    TodoInput = __decorate([
        core_1.Component({
            selector: 'todo-input',
            template: "<h1>Welcome to Angular 2 World</h1>\n        <div>\n            <input type=\"text\" #angularInput (keydown)=\"onLog(angularInput.value)\">\n            <button (click)=\"onClick($event, angularInput.value)\">Save And Clear</button>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoInput);
    return TodoInput;
}());
exports.TodoInput = TodoInput;
//# sourceMappingURL=todo-input.js.map