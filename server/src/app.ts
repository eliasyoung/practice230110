import express, { Application, Request, response, Response } from "express";
import bodyParser from "body-parser";
import { IRoute, IUser, routes, users } from "./data";

interface IBody {
  uid: number;
}

const app: Application = express();
const PORT: number = 8081;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/user_router_list", (req: Request, res: Response) => {
  const { uid }: IBody = req.body;
  if (uid) {
    const userInfo: IUser | undefined = users.find((user) => user.id === uid);
    if (userInfo) {
      const routesList: IRoute[] = [];
      userInfo.auth.map((rid) => {
        routes.map((route) => {
          if (route.id === rid) routesList.push(route);
        });
      });

      res.status(200).send({
        data: routesList,
      });
    } else {
      res.status(200).send({
        msg: "User not found.",
        data: null,
      });
    }
  } else {
    res.status(200).send({
      msg: "UID not provided.",
      data: null,
    });
  }
});

app.listen(PORT, () => {
  console.log("SERVER STARTED ON PORT: " + PORT + ".");
});
