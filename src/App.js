import { Clapperboard, House, Search, Ellipsis, AlignJustify, Compass, MessageCircle, Heart, Send, SquarePlus, AtSign, Bookmark } from 'lucide-react';
import { useState } from 'react';

// fix the width to change page, fix sugg follows

const NavigationBar = ({
  profile,
}) => {
  return (
    <div className='flex flex-col gap-20 w-[230px] p-[10px] border-1 border-gray-200 bg-white'>
      <div>
        {/* instagram */}
        <img src="./pictures/igName.png" className="w-[100px] m-5" />
        {/* Options */}
        <div className='flex flex-col gap-2 w-[220px]'>
          <div className='flex h-[52px] p-3 my-2 hover:bg-gray-100 rounded-md'>
            <House strokeWidth={2.8} size={26}/>
            <p className='mx-4 font-bold'>Home</p>
          </div>
          <div className='flex h-[52px] p-3 hover:bg-gray-100 rounded-md'>
            <Search size={26}/>
            <p className='mx-4'>Search</p>
          </div>
          <div className='flex h-[52px] p-3 hover:bg-gray-100 rounded-md'>
          <Compass size={26}/>
          <p className='mx-4'>Explore</p>
          </div>
          <div className='flex h-[52px] p-3 hover:bg-gray-100 rounded-md'>
            <Clapperboard size={26}/>
            <p className='mx-4'>Reels</p>
          </div>
          <div className='flex h-[52px] p-3 hover:bg-gray-100 rounded-md'>
            <MessageCircle size={26}/>
            <p className='mx-4'>Messages</p>
          </div>
          <div className='flex h-[52px] p-3 hover:bg-gray-100 rounded-md'>
            <Heart size={26}/>
            <p className='mx-4'>Notifications</p>
          </div>
          <div className='flex h-[52px] p-3 hover:bg-gray-100 rounded-md'>
            <SquarePlus size={26}/>
            <p className='mx-4'>Create</p>
          </div>
          <div className='flex h-[52px] p-3 hover:bg-gray-100 rounded-md'>
            <img src={profile} className='w-7 h-7 rounded-[50%]' />
            <p className='mx-4'>Profile</p>
          </div>
        </div>
      </div>
      <div>
        <div className='flex h-[52px] p-3 hover:bg-gray-100 rounded-md'>
        <AtSign size={26}/>
        <p className='mx-4'>Threads</p>
        </div>
        <div className='flex h-[52px] p-3 hover:bg-gray-100 rounded-md'>
        <AlignJustify size={26}/>
        <p className='mx-4'>More</p>
        </div>
      </div>
    </div>
  );
}

const Post = ({
  profile,
  username,
  post,
  likesCount,
  caption,
  tags,
  commentsCount,
  hoursAgo,
}) => {

  const [comments, setComments] = useState(commentsCount);
  const [likes, setLikes] = useState(likesCount);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  function handleLikeclick() {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(!liked);
    } else {
      setLikes(likes - 1);
      setLiked(!liked);
    }
  }

  function handleSaveClick () {
    if (!saved) {
      setSaved(!saved);
    } else {
      setSaved(!saved);
    }
  }
  
  return (
    <div className="flex items-center justify-around">

      
      {/* Posts page */}
      <div className='max-w-[470px] bg-white m-0 self-center'>
        {/* User profile */}
        <div className='flex items-center justify-between m-3'>
          {/* profile + username */}
          <div className='flex items-center'>
            <img src={profile} className='w-10 rounded-[50%]'/>
            <h3 className='font-semibold mx-3'>{username}</h3>
            <h3 className='font-semibold'>•</h3>
            <h3 className='font-normal text-gray-400 mx-3'>{hoursAgo}h</h3>
          </div>

          <div><Ellipsis /></div>

        </div>
      
        {/* post */}
        <div>
          <img src={post} className='max-w-[100%] rounded'/>
        </div>

        {/* Iconsbar */}
        <div className='flex justify-between px-2 py-3'>
          {/* icons */}
          <div className='flex gap-3'>
            <Heart onClick={handleLikeclick} className='hover:opacity-60' size={26} style={{color: !liked ? 'black' : 'red', fill: !liked ? 'none' : 'red'}}/>
            <MessageCircle className='hover:opacity-60' size={26}/>
            <Send className='hover:opacity-60' size={26}/>
          </div>
          <Bookmark className='hover:opacity-60' size={26} onClick={handleSaveClick} style={{fill: !saved ? 'none' : 'black'}}/>
        </div>
        <p className='mx-3 font-semibold'>{likes} likes</p>
        {/* Caption */}
        <div className='mx-[10px]'>
          <p> <span className='mr-1 font-semibold'>{username}</span>{caption} <span className='text-blue-500'>{tags}</span></p>
        </div>
        <p className='text-gray-500 mx-[10px]'>View {comments} comments</p>
        <input 
        className='text-gray-600 mx-[10px] font-normal'
        placeholder='Add comment...'
        />
      </div>
    </div>
  );
}

const SuggFollows = ({accountUser, accountPf, accountName}) => {

  return (
    <div className='w-[230px] fixed bg-red-500'>
      <div className='flex justify-between'>
        <img src={accountPf} className='w-20' />
        <div className='block'>
          <p>{accountUser}</p>
          <p>{accountName}</p>
        </div>
        <p className='text-blue-500'>Switch</p>
      </div>
      <div className='flex justify-between w-[100%] items-center'>
        <p className='text-gray-500 font-semibold'>Suggested for you</p>
        <p className='text-sm font-semibold'>See All</p>
      </div>
    </div>
  );
}

const Posts = () => {
  return (
    <div className='max-w-[470px]'>
    <Post username={'alexmcghauney'} profile={'./pictures/prof2.png'} post={'./pictures/pic3.jpg'} likesCount={66} commentsCount={8} caption={'My favorite cat!'} tags={'#myfavcat #cute #cats #kittens'} hoursAgo={1}/>
    <Post username={'jean_and_eugenie'} profile={'./pictures/prof1.jpeg'} post={'./pictures/prof3.jpeg'} likesCount={12} commentsCount={2} caption={'The love of my life'} tags={'#wife #love #couple'} hoursAgo={3}/>
    <Post username={'karl_ekstar'} profile={'./pictures/pic.jpeg'} post={'./pictures/pic2.jpg'} likesCount={3} commentsCount={0} caption={''} tags={'#sunset'} hoursAgo={7}/>
    </div>
  );
}

const IgPage = ({accountUser, accountPf, accountName}) => {
  return (
    <>
      <div className='flex flex-col {max-w > 970px ? opacity-100 : opacity-0}'>
        <div className='fixed top-0 bottom-0 left-0'>
          <NavigationBar profile={accountPf}/>
        </div>
        <div className='self-center'>
          <Posts />
        </div>
        <div className='fixed top-0 bottom-0 right-0 place-self-end'>
          <SuggFollows accountPf={accountPf} accountUser={accountUser} accountName={accountName}/>
        </div>
      </div>
    </>
  );
}

const App = () => {
  return (
    <IgPage accountName={'Alex Mcghauney'} accountUser={'alexmcghauney'} accountPf={'./pictures/prof2.png'}/>
  );
}

export default App;
