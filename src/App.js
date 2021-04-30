import React, {useState} from 'react'
import image from './images/image.jpg';

const App = () => {

  const [inputData, setInputData] = useState('')
  const [item, setItem] = useState([]);

  const addItem = () => {
    if(inputData !== ""){
      setItem([...item, inputData]);
      setInputData('');
    }else{
      alert('Please enter something in the input');
    }
  }

  const deleteItem = (id) => {
    setItem((prev) => prev.filter((data, ind) => ind !== id))
  }

  const removeAll = () => {
    setItem([]);
  }

  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <figure>
            <img src={image} alt='todo_logo' />
            <figcaption>Add your list here </figcaption>
          </figure>

          <div className="addItems">
            <input type='text' placeholder='Add items' value={inputData} onChange={(e) => setInputData(e.target.value)}/>
            <i className="fa fa-plus add-btn" title='Add item' onClick={addItem}></i>
          </div>

          <div className="showItems">
            {item.map((data, index) => {
              return (
                <div className="eachItem">
                  <h3>{data}</h3>
                  <i className="far fa-trash-alt add-btn" title='Delete item' onClick={() => deleteItem(index)}></i>
                </div>
              )
            })}
          </div>

          <div className='showItems'>
            <button className='btn effect04' data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
