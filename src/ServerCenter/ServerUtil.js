const SERVER_URL = "http://127.0.0.1:8091"

const SERVER_SERVICE_VOTE = SERVER_URL + "/VoteService"
const SERVER_SERVICE_STUDENT = SERVER_URL + "/StudentService"

/**
 * 查询投票详细
 * POST
 * @param       voteId      int             要查询的投票id
 */
export const SERVER_URL_VOTE_QUERY_DETAIL = SERVER_SERVICE_VOTE + "/getVoteDetail"

/**
 * 新增投票
 * POST
 * @param       name         String          该投票的描述
 */
const SERVER_URL_VOTE_ADDD = SERVER_SERVICE_VOTE + "/addVote"

/**
 * 为该投票新增可选条目
 * POST
 * @param       voteId       int             需要添加投票条目的投票id
 * @param       serialNum    int             此次添加的条目序号
 * @param       imageUrl     String          此次添加的条目图片地址
 * @param       info         String          此次添加的条目描述
 */
const SERVER_URL_VOTE_ADDITEM = SERVER_SERVICE_VOTE + "/addVoteItem"

/**
 * 为该投票更新可选条目
 * POST
 * @param       voteId       int             需要添加投票条目的投票id
 * @param       serialNum    int             此次添加的条目序号
 * @param       imageUrl     String          此次添加的条目图片地址
 * @param       info         String          此次添加的条目描述
 */
const SERVER_URL_VOTE_UPDATEITEM = SERVER_SERVICE_VOTE + "/upDataVoteItem"

/**
 * 查询该投票结果
 * POST
 * @param       id          int         要查询的投票id
 */
const SERVER_URL_VOTE_RESULT_QUERY = SERVER_SERVICE_VOTE + "/queryVoteResult"

/**
 * 投票
 * POST
 * @param       voteId      int         要投票的id
 * @param       serialNums  String      要投票的条目(多选时用逗号隔开)
 * @param       remark      String      投票的备注
 * @param       studentId   int         投票人id
 */
const SERVER_URL_VOTE_ADD_RESULT = SERVER_SERVICE_VOTE + "/addVoteResult"
