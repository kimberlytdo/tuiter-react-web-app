import {Link} from "react-router-dom";
import Classes from "../classes/index.js";
import Styles from "./styles/index.js";
import ConditionalOutput from "./conditional-output/index.js";
import TodoList from "./todo/todo-list.js";

function Assignment6() {
    return (
        <div>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </div>
    );
}
export default Assignment6