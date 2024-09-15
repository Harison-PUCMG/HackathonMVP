import './botão.css';

function Botão ({title, classNameBtn, callbackfn}) {
    return(
        <input type="button" 
                value={title} 
                className={classNameBtn}
                onClick={callbackfn}>
        </input>
    )
}

export default Botão;