import { useState, useRef, useEffect } from 'react';
import './App.css';
import Add from './pages/add-item/add-item.page'
import View from './pages/view-item/view'
import Header from './components/header/header.component';
import NotFound from './pages/not-found'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const ReadItems = () =>
JSON.parse(localStorage.getItem('todoList') || '[]');

function App() {
  //You can put all product information into diaglog
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
  });

  const [items, setItems] = useState(null);
  //const [Window,setWindow] =useState(false);
  // const [currentpage, setCurrentPage] = useState('view');
  const [loading, setLoading] = useState('view');

  useEffect(() => {
    setLoading(true);
    console.log("Fetching Items...");

    setTimeout(() => {
      const items = ReadItems();
      setItems(items);
      setLoading(false);
    }, 1000);

  }, []);


  //useEffect for check the changed items.
  useEffect(() => {
    if (items !== null) {
      console.log("Items has changed!");
      localStorage.setItem('todoList', JSON.stringify(items));
    }
  }, [items]);

  const addItem = (item) => {
    //set the updated value of items array 
    setItems([...items, item]);
  }

  const idItemRef = useRef();
  const handleDialog = (message, isLoading) => {
    setDialog({ message, isLoading });
  };


  const deleteItem = (id) => {
    // const index = items.findIndex((item) => item.id === id);
    handleDialog("Are you sure you want to delete? sure you are sure ?", true);
    idItemRef.current = id;
  };


  const areUSureDelete = (choose) => {
    if (choose) {
      setItems(items?.filter(item => item.id !== idItemRef.current));
      handleDialog("", false);
    } else {
      handleDialog("", false);
    }
  };

  const sortFunction = (item) => {
    const newItems = [...item].sort((firstItem, secondItem) =>
      firstItem.isDone > secondItem.isDone ? 1 : -1,
    );
    setItems(newItems);
  };

  const finishitem = (id) => {
    // Sort version of the mapping
    const newItems = (items?.map(item => item.id === id ?
      { ...item, isDone: true } : item));
    setItems(newItems);
    sortFunction(newItems);
    localStorage.setItem('todoList', JSON.stringify(newItems));

  }

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/add" element={<Add onAddItem={addItem} />} ></Route>
            <Route path="/view" element={<View
              dialog={dialog}
              dialogItem={dialog.isLoading}
              areUSureDelete={areUSureDelete}
              loading={loading}
              items={items || []}
              onDelete={deleteItem}
              onFinish={finishitem} />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
