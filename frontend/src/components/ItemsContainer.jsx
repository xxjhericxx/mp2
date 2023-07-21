import Item from "./Item";
import { PRODUCTS, COMPANY, SUPPORT } from "../components/Menus";
const ItemsContainer = () => {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16 text-gray-50">
        <Item Links={PRODUCTS} title="PRODUCTS" />
        <Item Links={COMPANY} title="COMPANY" />
        <Item Links={SUPPORT} title="SUPPORT" />
    </div>
    );
};

export default ItemsContainer;
