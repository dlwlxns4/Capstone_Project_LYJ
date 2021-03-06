

const local_login = require('./passport/local_login');
const local_signup = require('./passport/local_signup');

module.exports = (app, passport) => {
    console.log('config/passport 호출됨.');
    
    // 인증 성공 시 처리하고 싶은 과정들 처리하는 곳
    passport.serializeUser((user, done) => {
        console.log('serializeUser 호출됨.');
        console.log(user);
    
        done(null, user);
    });

    // 인증이 아니라 다른 요청들에서 다른 확인 작업을 하고 싶은 경우
    passport.deserializeUser((user, done) => {
        console.log('deserializeUer 호출됨.');
        console.log(user);
    
        done(null, user);
    });
    
    //===== Passport Strategy 설정 =====//
    passport.use('local-login', local_login);
    passport.use('local-signup', local_signup);
    console.log('passport strategy 등록됨.');  
}