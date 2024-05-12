import { Fragment } from "react/jsx-runtime";
import { Product } from "../../app/models/product";
import { Button } from "@mui/material";
import ProductList from "./Product";

interface Props {
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({ products, addProduct }: Props) {
    return (
        <Fragment>
            <ProductList products={ products} />
            <Button variant="contained" onClick={addProduct}>Add product</Button>
        </Fragment>

    )
}