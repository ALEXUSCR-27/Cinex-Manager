import Modal from 'react-modal';
function MovieModal({movie, open, flag, onClose}) {
    return (
        <Modal className= "movie_modal" isOpen = {open}>
                <div className='_modal_title_continer'>
                    <h3>DETALLES DE PELICULA</h3>
                </div>
                <div className='_modal_inputs'>
                    <div className='_inputs_container'>
                        <div className='_input_group_modal'>
                            <label>GENERO</label>
                            <input className="inputModal" disabled={flag} value={movie.genero}></input>
                        </div>
                        <div className='_input_group_modal'>
                            <label>IDENTIFICADOR:</label>
                            <input className="inputModal" disabled={flag} value={movie.peliculaID}></input>
                        </div>
                        <div className='_input_group_modal'>
                            <label>TITULO:</label>
                            <input className="inputModal" disabled={flag} value={movie.titulo}></input>
                        </div>
                        <div className='_input_group_modal'>
                            
                            <label>DIRECTOR:</label>
                            <input className="inputModal" disabled={flag} value={movie.director}></input>
                        </div>
                        <div className='_input_group_modal'>
                            <label>IDIOMA:</label>
                            <input className="inputModal" disabled={flag} value={movie.idioma}></input>
                            
                        </div>
                        <div className='_input_group_modal'>
                            <label>EDAD REQUERIDA:</label>
                            <input className="inputModal" disabled={flag} value={movie.edadRequerida}></input>
                            
                        </div>
                        <div className='_input_group_modal'>
                            <label>FECHA DE ESTRENO:</label>
                            <input className="inputModal" disabled={flag} value={movie.fechaEstreno}></input>
                            
                        </div>
                        <div className='_input_group_modal'>
                            <label>DURACION:</label>
                            <input className="inputModal" disabled={flag} value={movie.duracionMin}></input>
                        </div>
                    </div>
                </div>
                <div className='_button_container'>
                    <button className='_search_button' onClick={() => onClose(false)}>CERRAR</button>
                </div>
            </Modal>
    );

}

export default MovieModal;