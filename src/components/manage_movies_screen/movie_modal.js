import Modal from 'react-modal';
function MovieModal({
    open, 
    flag, 
    onClose,
    onClickModify,
    title,
    language,
    genre,
    release_date,
    mpa_age,
    running_time,
    director,
    id,
    onChange_director,
    onChange_duration,
    onChange_age,
    onChange_release_date,
    onChange_genre,
    onChange_language,
    onChange_title
}) {
    return (
        <Modal 
            className= "movie_modal" 
            isOpen = {open} 
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.80)'
                }
            }}
        >
            <div className='_modal_title_continer'>
                <h3>Movie Details ID [{id}]</h3>
            </div>
            <div className='_modal_inputs'>
                <div className='_inputs_container'>
                    <div className='_input_group_modal'>
                        <label>Genre</label>
                        <input 
                            className="inputModal" 
                            disabled={flag} 
                            value={genre}
                            onChange={(e) => onChange_genre(e.target.value)}
                        ></input>
                    </div>
                    <div className='_input_group_modal'>
                        <label>Title:</label>
                        <input 
                            className="inputModal" 
                            disabled={flag} 
                            value={title}
                            onChange={(e) => onChange_title(e.target.value)}
                        ></input>
                    </div>
                    <div className='_input_group_modal'>
                        <label>Director:</label>
                        <input 
                            className="inputModal" 
                            disabled={flag} 
                            value={director}
                            onChange={(e) => onChange_director(e.target.value)}
                        ></input>
                    </div>
                    <div className='_input_group_modal'>
                        <label>Language:</label>
                        <input 
                            className="inputModal" 
                            disabled={flag} 
                            value={language}
                            onChange={(e) => onChange_language(e.target.value)}
                        ></input>
                        
                    </div>
                    <div className='_input_group_modal'>
                        <label>MPA Age:</label>
                        <input
                            type='number' 
                            className="inputModal" 
                            disabled={flag} 
                            value={mpa_age}
                            onChange={(e) => onChange_age(e.target.value)}
                        ></input>
                        
                    </div>
                    <div className='_input_group_modal'>
                        <label>Release date:</label>
                        <input 
                            type='date'
                            className="inputModal" 
                            disabled={flag} 
                            value={release_date}
                            onChange={(e) => onChange_release_date(e.target.value)}
                        ></input>
                        
                    </div>
                    <div className='_input_group_modal'>
                        <label>Running time:</label>
                        <input
                            type='number'
                            className="inputModal" 
                            disabled={flag} 
                            value={running_time}
                            onChange={(e) => onChange_duration(e.target.value)}
                        ></input>
                    </div>
                </div>
            </div>
            <div className='_button_container_modal'>
                <button className='_search_button' onClick={() => onClose(false)}>Close</button>
                { !flag && (
                    <button 
                        className='_modify_button' 
                        onClick={() => onClickModify({
                            id:id,
                            titulo:title,
                            idioma:language,
                            fecha:release_date
                        })}
                    >Modify</button>
                )}
            </div>
        </Modal>
    );

}

export default MovieModal;