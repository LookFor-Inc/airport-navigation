import React, {createRef, useState} from 'react'
import SendIcon from '@/assets/icons/SendIcon'
import IconButton from '@/components/IconButton'
import Input from '@/components/Input'
import Content from '@/components/Page/Content'
import {getCurrentTimeString} from '@/helpers/dateUtil'
import Message from '@/pages/Airport/components/Chat/Message'
import Navbar from '@/pages/Airport/components/Navbar/Navbar'

const messages = [
  {
    from: 'robot',
    text: 'Добрый день! Вы можете обратиться ко мне в случае возникновения каких-либо трудностей.',
    time: getCurrentTimeString()
  }
]

/**
 * Вкладка онлайн-чата
 * @returns {JSX.Element} Элемент страницы
 */
function ChatTabPage() {
  const [message, setMessage] = useState('')
  const scrollRef = createRef()

  /**
   * Отправка сообщения
   * @returns {void}
   */
  const sendMessage = () => {
    if (message === '') return
    messages.push({
      from: 'user',
      text: message,
      time: getCurrentTimeString()
    })
    setMessage('')
    messages.push({
      from: 'robot',
      text: 'Подождите, с Вами скоро свяжется оператор 👨‍💻',
      time: getCurrentTimeString()
    })
    scrollRef.current.scrollIntoView({behavior: 'smooth'})
  }

  /**
   * Обработчик формы
   * @param {Event} e Событие
   * @returns {void}
   */
  const onSubmit = e => {
    e.preventDefault()
    sendMessage()
  }

  return (
    <>
      <Navbar>
        <div className='font-medium text-center'>
          Онлайн-чат
        </div>
      </Navbar>
      <div className='mt-16 mb-26'>
        <Content
          className='overflow-scroll'
          style={{height: 'calc(100vh - 176px)'}}
        >
          {messages.map((message, idx) => (
            <Message
              key={idx}
              fromUser={message.from === 'user'}
              time={message.time}
            >{message.text}</Message>
          ))}
          <div ref={scrollRef} />
        </Content>
      </div>
      <form
        onSubmit={e => onSubmit(e)}
        className='fixed inset-x-0 flex bg-white border border-gray-300 z-40'
        style={{bottom: '61px'}}
      >
        <Input
          type='text'
          className='rounded-none border-0'
          placeholder='Введите сообщение'
          onChange={e => setMessage(e.target.value)}
          value={message}
        />
        <IconButton
          type='submit'
          className='rounded-none text-primary hover:text-primaryDark'
          icon={<SendIcon className='' />}
          onClick={() => sendMessage()}
        />
      </form>
    </>
  )
}

ChatTabPage.propTypes = {}

export default ChatTabPage
