import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

const ContactList = () => {
    const contactList = useSelector((state) => state.contactList)
    const keyword = useSelector((state) => state.keyword)

    const [filteredList, setFilteredList] = useState([])

    useEffect(()=>{
        if(keyword === "") {
            setFilteredList(contactList)
            console.log(keyword)
        } else {
            console.log(contactList)
            let list = contactList.filter(item => item.name.includes(keyword))
            setFilteredList(list)
        }
    },[keyword, contactList])

  return (
    <div className='contact-right-container'>
      <SearchBox />
      <div>
        num : {filteredList.length}
        {filteredList.map((item, key)=>(<ContactItem item={item} key={key} />))}
      </div>
    </div>
  )
}

export default ContactList
