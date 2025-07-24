<template>
  <header class="header">
    <div class="top-bar">
      <div class="top-inner">
        <div class="hcode_wrap">
          <router-link to="/" class="on">공무원</router-link>
          <router-link to="/sobang">소방</router-link>
        </div>
        <div class="login_wrap">
          <div class="util">
            <span class="day">D-100</span>
            <router-link to="/academy" class="link">학원 전체보기</router-link>
            <router-link to="/mypage/playground" class="link">플레이그라운드</router-link>
            <router-link to="/help/faq/" class="link">학습지원센터</router-link>
            <router-link to="/my_study" class="link">내 강의실</router-link>
            <router-link to="/mypage" class="link">MY</router-link>
          </div>
          <div class="auth">
            <router-link to="/login" class="login">로그인</router-link>
            <router-link to="/register" class="join">회원가입</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="gnb-area">
      <div class="gnb">
        <h1 class="logo">
          <router-link to="/">
            <img src="https://img.megagong.net/s/gong/logo_nextgong.png" alt="넥스트공무원" />
          </router-link>
        </h1>
        <nav class="nav">
          <ul>
            <li><router-link to="/pass">넥스트패스</router-link></li>
            <li><router-link to="/vod/vod_chr_list">수강신청</router-link></li>
            <li><router-link to="/teacher">선생님</router-link></li>
            <li><router-link to="/fullservice">합격예측 풀서비스</router-link></li>
            <li><router-link to="/lab">수험정보</router-link></li>
            <li><router-link to="/event">이벤트</router-link></li>
            <li><router-link to="/book">교재</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #ddd;
  background-color: white;

  .top-inner {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .hcode_wrap {
    display: flex;
    gap: 10px;
    a.on {
      color: #0055ff;
    }
  }

  .login_wrap {
    display: flex;
  }

  .top-bar {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 10px 20px;
    background: #f8f8f8;
    color: #555;

    .util {
      display: flex;
      gap: 12px;

      .day {
        color: #0055ff;
        font-weight: bold;
      }

      .link {
        color: #333;
        text-decoration: none;
      }
    }

    .auth {
      display: flex;
      gap: 12px;

      a {
        color: #333;
        text-decoration: none;
      }
    }
  }
  .gnb-area {
    max-width: 1200px;
    margin: 0 auto;
    .gnb {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 0px;

      .logo img {
        height: 28px;
      }

      .nav ul {
        display: flex;
        gap: 24px;

        li a {
          text-decoration: none;
          color: #111;
          font-weight: 500;
          font-size: 15px;

          &:hover {
            color: #0055ff;
          }
        }
      }
    }
  }
}
</style>
s
