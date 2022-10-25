import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Paginator = (props) => {
    const prev = props.meta.links[0].url, next = props.meta.links[props.meta.links.length -1].url, current = props.meta.current_page;
    return (
        <div className="btn-group">
           {prev && <Link href={prev} className="btn btn-outline">«</Link>}
            <Link className="btn btn-outline">{current}</Link>
           {next && <Link href={next} className="btn btn-outline">»</Link>}
        </div>
    )
}
export default Paginator;