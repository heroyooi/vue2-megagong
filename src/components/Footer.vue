<template>
  <footer class="footer">
    <div class="footer-inner">
      <ul class="footer-links">
        <li><a href="#">회사소개</a></li>
        <li><a href="#">이용약관</a></li>
        <li><a href="#">개인정보처리방침</a></li>
        <li><a href="#">고객센터</a></li>
      </ul>
      <div class="footer-info">
        <p>
          서울특별시 구로구 경인로 662, 타워동 31층(신도림동, 디큐브시티) ㈜넥스트스터디 대표이사
          윤훈희 개인정보보호책임자 윤훈희 (keeper@megagong.net)
        </p>
        <p>
          메가스터디교육 원격평생교육시설(제434호) (주)넥스트스터디 사업자등록번호 : 561-81-03379
          통신판매업신고번호 : 제2025-서울구로-1079호
        </p>
        <p>신고기관명 : 서울시 강남구 호스팅제공자 : (주)케이티</p>
        <p class="copyright">Copyright © nextstudy.co.,Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped lang="scss">
.footer {
  background-color: #f5f6f7;
  border-top: 1px solid #ddd;
  font-size: 13px;
  color: #666;

  .footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 0;
  }

  .footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 12px;

    li {
      list-style: none;

      a {
        color: #444;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .footer-info {
    line-height: 1.6;
  }

  .copyright {
    margin-top: 8px;
    font-size: 12px;
    color: #999;
  }
}
</style>
