import React, {useState} from 'react'
import SendIcon from '@/assets/icons/SendIcon'
import IconButton from '@/components/IconButton'
import Input from '@/components/Input'
import Content from '@/components/Page/Content'
import Message from '@/pages/Airport/components/Chat/Message'
import Navbar from '@/pages/Airport/components/Navbar/Navbar'

const messages = [
  {
    from: 'robot',
    text: 'Добрый день! Вы можете обратиться ко мне в случае возникновения каких-либо трудностей.'
  }
]

/**
 * Вкладка онлайн-чата
 * @returns {JSX.Element} Элемент страницы
 */
function ChatTabPage() {
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    if (message === '') return
    messages.push({
      from: 'user',
      text: message
    })
    setMessage('')
    messages.push({
      from: 'robot',
      text: 'Подождите, с Вами скоро свяжется оператор 👨‍💻'
    })
  }

  return (
    <>
      <Navbar >
        <div className='font-medium text-center'>
          Онлайн-чат
        </div>
      </Navbar>
      <div className='mt-16 mb-24'>
        <Content className='overflow-scroll'>
          {messages.map((message, idx) => (
            <Message
              key={idx}
              fromUser={message.from === 'user'}
            >{message.text}</Message>
          ))}
        </Content>
      </div>
      <div className='fixed inset-x-0 flex bg-white border border-gray-300' style={{bottom: '61px'}}>
        <Input
          type='text h-full'
          className='rounded-none'
          placeholder='Введите сообщение'
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
        <IconButton
          className='rounded-none'
          icon={<SendIcon className='' />}
          onClick={() => sendMessage()}
        />
      </div>
    </>
  )
}

export default ChatTabPage
