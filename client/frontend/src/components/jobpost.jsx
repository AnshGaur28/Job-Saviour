import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function JobPost() {

  const card = {
    border: "1px solid ",
    paddingRight : "25px",
    paddingLeft: "60px",
    marginBottom: "25px",
    paddingTop : "20px",
    paddingBottom : "20px",
    

  };

  const margin = {
    marginLeft: "200px"
  };


  const posts = [
    { title: 'software engg', description: 'This is b' , postDate : '29-10-2003' , expiryDate : '' , JobStatus: '' , location : '', skills : ''},
    { title: 'software dev', description: 'This is b' , postDate : '29-09-2003' , expiryDate : '' , JobStatus: '' , location : '', skills : ''},
    { title: 'tester', description: 'This is b' , postDate : '29-08-2003' , expiryDate : '' , JobStatus: '' , location : '', skills : ''},
    { title: 'HR', description: 'This is b' , postDate : '29-07-2003' , expiryDate : '' , JobStatus: '' , location : '', skills : ''},
    { title: 'Operations Manager', description: 'This is b' , postDate : '29-11-2003' , expiryDate : '' , JobStatus: '' , location : '', skills : ''},
    
  ]

  // Store sortby order i.e. ascending or descending
  const [sortType, setSortType] = useState("ascending");

  // Sortby field i.e. title or description
  const [sortByField, setSortByField] = useState("title");

  // Store filter/latest posts
  const [result, setResult] = useState();
  
  const [state, setstate] = useState({
    query: '',
    list: posts
  })

  // Filter posts on typing in search input
  const handleChange = (e) => {
    const results = posts.filter(post => {
      if (e.target.value === "") return posts;
        return post[sortByField].toLowerCase().includes(e.target.value.toLowerCase())
    })

    setResult(results);

    setstate({
      query: e.target.value,
      list: sortFunc(results, sortType, sortByField)
    })
  }

  // Sort posts depending on sort type and available results
  function sortFunc(results, sortType, sortByField) {
    console.log(sortByField)
    if (sortType === "ascending") {
      results.sort((a, b) => a[sortByField] < b[sortByField] ? -1 : 1)  
    }
    else if (sortType === "descending") {
      results.sort((a, b) => b[sortByField] > a[sortByField] ? 1 : -1)
    }
    return results;
  }

  // Dropdown to sort posts in ascending or descending order depending on title.
  function updatePosts(e) {
    setSortType(e);
    setstate({
      query: state.query,
      list: !result ? sortFunc(posts, e, sortByField) : sortFunc(result, e, sortByField)
    })
  }

  // Dropdown to sort posts in ascending or descending order depending on title.
  function sortBy(e) {
    setSortByField(e);
    setstate({
      query: state.query,
      list: !result ? sortFunc(posts, sortType, e) : sortFunc(result, sortType, e)
    })
  }
  const [jobPostings, setJobPostings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jwtToken, setJwtToken] = useState('');

  useEffect(() => {
    // Retrieve JWT token from localStorage
    const token = localStorage.getItem('jwtToken');
    if (token) {
      setJwtToken(token);
    }
  }, []);

  useEffect(() => {
    // Function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/job' ,{
          headers: {
              Authorization: `Bearer ${jwtToken}`, // Include JWT token in the Authorization header with Bearer scheme
            },
        });
        // Assuming the API response contains job postings data in response.data
        setJobPostings(response.data);
      } catch (error) {
        setError(error); // Handle error
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  if (loading) {
    return <div>Loading...</div>; // You can show a loading spinner while data is being fetched
  }

  if (error) {
    return <div>Error occurred: {error.message}</div>; // Handle error case
  }

  return (
    <div>
     <form className="h-20 rounded p-2  justify-center align-center  bg-slate-800 text-white  rounded p-2 m-2">
        <span style={margin}>Search:</span>
        <input onChange={handleChange} value={state.query} className="bg-white text-black" type="search"/>          
        
        <span style={margin}>Sort By :</span>
        <select defaultValue={'postDate'} className="bg-white text-black  rounded p-2 m-2" onChange={(e) => sortBy(e.target.value)}>
          <option value="postDate" disabled>None</option>
          <option value="postDate">postDate</option>
          <option value="expiryDate">expiryDate</option>
        </select>
      
        <span style={margin}>Sort By :</span>
        <select defaultValue={'DEFAULT'} className="bg-white text-black rounded p-2 m-2"  onChange={(e) => updatePosts(e.target.value)}>
          <option value="DEFAULT" disabled>None</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
     </form>
     <ul>
      {(
        jobPostings.map(post => {
         return <div key={post.title} style={card} className="bg-stone-100 font-bold text-xl">
              <h2 >Title : {post.title}</h2>
              <p>Description: {post.description}</p>
              <p>Status :{post.status}</p>
              <p>PostDate: {post.postedDate}</p>
              <p>ExpiryDate: {post.expiryDate}</p>
              <p>Location: {post.location}</p>
              <p>Skills: {post.skillsRequired}</p>
              <p></p>
            </div>
        })
        )}

        { state.list.length === 0 && <h2>Empty List !!!</h2> }
         
     </ul>
    </div>  
  );
}

