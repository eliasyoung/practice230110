import { IRoute } from "@/models";

export function formatRouteTree(routes: IRoute[]) {
  const parents = routes.filter((route) => route.pid === 0),
    children = routes.filter((route) => route.pid !== 0);

  listToTree(parents, children);
  return parents;
}

function listToTree(parents: IRoute[], children: IRoute[]) {
  parents.map((parent) => {
    children.map((child, index) => {
      if (child.pid === parent.id) {
        let _children = JSON.parse(JSON.stringify(children));
        _children.splice(index, 1);
        listToTree([child], _children);
        if (parent.children) parent.children.push(child);
        else parent.children = [child];
      }
    });
  });
}
