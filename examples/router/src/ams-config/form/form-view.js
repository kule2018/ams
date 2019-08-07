import ams from '@ams-team/ams';

ams.block('form-view', {
    type: 'form',
    resource: 'resource',
    ctx: 'view',
    operations: {
        submit: {
            type: 'button',
            label: '提交',
            props: {
                type: 'primary'
            }
        },
        loginAction: {
            type: 'button',
            label: '需要登录的接口'
        }
    },

    // data: {
    //     testCheckbox: 0
    // },

    events: {
        init: '@read'
    },

    fields: {
        testText: {
            default: 'sss'
        }
    },

    actions: {
        loginAction() {
            this.$ams.request({
                url: 'https://easy-mock.com/mock/5a0023effbbb09615044cb82/some-login-action'
            });
        }
    }
});
