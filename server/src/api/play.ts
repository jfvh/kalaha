import { assign } from '../data/meta';

export function play(res: any) { //should be express.response 
  const result = assign();
  if (typeof result === "undefined") {
    res.status(403).send({ "message": `no new players can be assigned, gamestatus: ${result}` });
  }
  res.status(200).send(result);
}