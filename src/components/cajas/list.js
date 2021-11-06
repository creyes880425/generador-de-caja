
const List = ({cajas}) => {
    return (
        <>
            {/* {JSON.stringify(cajas)} */}
            <ul className="grid">{
                cajas.map( (item, i) => 
                    <li key={ i }>
                        <div style={{ width: item.size + 'px', height: item.size + 'px', backgroundColor: item.color }}></div>
                    </li>                
                )
            }</ul>
        </>
        
    )
}

export default List;
