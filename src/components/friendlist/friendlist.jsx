import { List} from "./feiendlist.styled";
import { ListItems } from "./friendlist-item/friendlist-items";

export const Friendlist = ({friends}) => {
  return (
    <List>
      <ListItems friends = {friends}></ListItems>
    </List>
  );
}