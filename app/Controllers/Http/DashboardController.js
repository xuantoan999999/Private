'use strict'

class DashboardController {
    async getDashboard({ response }) {
        let countUser = await User.count();
        let countAccount = await Account.count();
        let allAccount = await Account.find().select('list_account').lean();
        let countWebsite = await Website.count();

        return response.send({
            countUser,
            countAccount,
            countWebsite,
            allAccount: allAccount.reduce((sum, item) => sum + item.list_account.length, 0)
        })
    }
}

module.exports = DashboardController
