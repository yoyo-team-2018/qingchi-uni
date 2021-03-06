import http from '@/plugins/http'
import ChatReadVO from '@/model/chat/ChatReadVO'
import ChatRemoveVO from '@/model/chat/ChatRemoveVO'
import UserVO from '@/model/user/UserVO'
import ChatVO from '@/model/chat/ChatVO'

export default class ChatAPI {
  /*static getChatAPI (user: UserVO) {
    return http.post<ChatVO>('chat/queryChat', user)
  }*/

  static getChatsAPI () {
    return http.post('chat/queryChats')
  }

  static readChatAPI (chatId: number, messageIds: number[]) {
    const chatRead: ChatReadVO = new ChatReadVO(chatId, messageIds)
    return http.post('chat/readChat', chatRead)
  }

  static frontDeleteChatAPI (chatId: number) {
    const chat: ChatRemoveVO = new ChatRemoveVO(chatId)
    return http.post('chat/frontDeleteChat', chat)
  }

  static closeChatAPI (chatId: number) {
    const chat: ChatRemoveVO = new ChatRemoveVO(chatId)
    return http.post('chat/closeChat', chat)
  }

  static openChatAPI (chatId: number, needPayOpen = false, content) {
    return http.post<ChatVO>('chat/openChat', { id: chatId, needPayOpen, content })
  }
}
