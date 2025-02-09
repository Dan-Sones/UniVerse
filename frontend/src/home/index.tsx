import ChatArea from "./ChatArea";
import ChatPreview from "./components/ChatPreview";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 64px); /* Same as ChatList to keep alignment */
  overflow-y: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ChatList = styled.div`
  width: 30%;
  min-width: 250px;
  max-width: 400px;
  height: calc(100vh - 64px); /* Adjust 60px to match your header height */
  overflow-y: auto; /* Enables scrolling for overflowing chat items */
  border-right: 1px solid lightgray;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 40vh; /* Ensures it doesn't take the whole screen on mobile */
    max-height: 40vh; /* Prevents it from growing too large */
  }
`;

const ChatAreaWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  min-height: 100%;
  flex-direction: column;
  padding-left: 10px;

`;


const chatItems = [
  {
    profilePictureUrl: "https://example.com/pic1.jpg",
    username: "Daniel Sones",
    message: "You are epic",
  },
  {
    profilePictureUrl: "https://example.com/pic2.jpg",
    username: "Jeff",
    message: "Hello there!",
  },
  {
    profilePictureUrl: "https://example.com/pic3.jpg",
    username: "Alice",
    message: "Let's go climbing!",
  },
  {
    profilePictureUrl: "https://example.com/pic4.jpg",
    username: "Bob",
    message: "What's up?",
  },
  {
    profilePictureUrl: "https://example.com/pic5.jpg",
    username: "Charlie",
    message: "Did you check that repo?",
  },
  {
    profilePictureUrl: "https://example.com/pic6.jpg",
    username: "Sophia",
    message: "We should catch up soon!",
  },
  {
    profilePictureUrl: "https://example.com/pic7.jpg",
    username: "Michael",
    message: "That project was intense!",
  },
  {
    profilePictureUrl: "https://example.com/pic8.jpg",
    username: "Emma",
    message: "I loved that new album!",
  },
  {
    profilePictureUrl: "https://example.com/pic9.jpg",
    username: "Liam",
    message: "What's your weekend plan?",
  },
  {
    profilePictureUrl: "https://example.com/pic10.jpg",
    username: "Olivia",
    message: "Need help with the code?",
  },
  {
    profilePictureUrl: "https://example.com/pic11.jpg",
    username: "Noah",
    message: "GG on that last game!",
  },
  {
    profilePictureUrl: "https://example.com/pic12.jpg",
    username: "Ava",
    message: "Movie night soon?",
  },
  {
    profilePictureUrl: "https://example.com/pic13.jpg",
    username: "Ethan",
    message: "Final exams are brutal!",
  },
  {
    profilePictureUrl: "https://example.com/pic14.jpg",
    username: "Mia",
    message: "Sent you the doc!",
  },
  {
    profilePictureUrl: "https://example.com/pic15.jpg",
    username: "William",
    message: "Yo, long time no see!",
  },
  {
    profilePictureUrl: "https://example.com/pic16.jpg",
    username: "Harper",
    message: "Brb, grabbing coffee.",
  },
  {
    profilePictureUrl: "https://example.com/pic17.jpg",
    username: "James",
    message: "We should code together!",
  },
  {
    profilePictureUrl: "https://example.com/pic18.jpg",
    username: "Ella",
    message: "Vacation next month?",
  },
  {
    profilePictureUrl: "https://example.com/pic19.jpg",
    username: "Benjamin",
    message: "Got a new setup!",
  },
  {
    profilePictureUrl: "https://example.com/pic20.jpg",
    username: "Charlotte",
    message: "Hyped for the new season!",
  },
];

const Home = () => {
  return (
    <HomeWrapper>
      <ChatList>

        {chatItems.map((chat) => {
          return <ChatPreview profilePictureUrl={""} username={chat.username} message={chat.message} />
        })}
       
      </ChatList>
      <ChatAreaWrapper>
        <ChatArea/>
      </ChatAreaWrapper>
    </HomeWrapper>
  );
};

export default Home;