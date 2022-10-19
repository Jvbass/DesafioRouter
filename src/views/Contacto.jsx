const Contacto = ()=> {
    return (
        <div className="container">

            <fieldset>
                <legend>
                <h2>Envianos tu mensaje </h2>
                </legend>

                <form>
                <label htmlFor="email">Correo:</label>
                <input type="email"  placeholder="Ingresa tu e-mail"/>

                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" cols="30" rows="10"></textarea>
                <button>Enviar</button>
                </form>
            </fieldset>
        </div>
    )
}

export default Contacto