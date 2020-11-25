import React, { FunctionComponent, useState } from "react"
import FriendsSearchResults from '../Components/FriendsSearchResults'
import { searchFriend } from '../ApiService/serverApiService'
import {User} from '../Interfaces'
import './FriendSearch.scss'

type FriendSearchProps = {
  handleAddFriend: Function,
  user: User
}

const FriendSearch: FunctionComponent<FriendSearchProps> = ({handleAddFriend, user}) => {
  const [searchName, setSearchName] = useState('')
  const [searchResults, setSearchResults] = useState<any>()
  const [isSearch, setIsSearch] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result: any = await searchFriend(searchName);
    setSearchName('');
    setSearchResults(result)
    console.log(result, 'RESULT')
    if(result.length === 0){
      setIsSearch(false)
    } else {
      setIsSearch(true)
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value)
  };

  console.log(searchResults, isSearch, searchName, 'SEARCH')

  return (
    <div>
      <h1 className='searchHeader'>Find Friends:</h1>
      <form className='searchForm' action="submit" onSubmit={handleSubmit}>
        <div className='inputAndBtnContainer'>
          <input onChange={handleChange} required className='searchInput' type="text" value={searchName} placeholder={`search by username...`}/>
          <button className="searchBtn" data-testid="searchClick" >search</button>
        </div>
      </form>
    { isSearch && <FriendsSearchResults users={searchResults} handleAddFriend={handleAddFriend} user={user} />}
    { !isSearch && searchResults && <h2>No Results Found</h2>}
    </div>
  )
}

export default FriendSearch;