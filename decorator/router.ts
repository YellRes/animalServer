// import koa from "koa";
import getRouter from "koa-router";

const router = getRouter();
const routerMappper = {
  get: {},
  post: {},
};

function setRouter() {
  for (let key in routerMappper["get"]) {
    router.get(key, routerMappper["get"][key]);
  }
}

function GetMapping(value: string) {
  return function (target, propertyKey: string) {
    routerMappper["get"][value] = target[propertyKey];
  };
}

export { setRouter, GetMapping, router };
