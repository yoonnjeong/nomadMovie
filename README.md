# nomadMovie

## gh-page 만들기

1. 프로젝트의 소스 코드 최적화 및 배포를 위해 터미널에 npm run build 실행
2. package.json 파일 마지막 하단에 "homepage": "https://(깃허브 아이디).github.io/(깃허브에 올라간 파일이름)" 적기

- 아이디와 파일이름 확인하려면 git remote -v하면 나온다
- 깃허브에 올라간 폴더가 공개폴더야지 올라간다.
- 깃허브 페이지에서 셋팅에 페이지에서 브랜치가 gh-page로 되있는지 확인!

3.  "scripts": {
    "deploy": "gh-pages -d build", // 깃허브 페이지에 파일 빌드
    "predeploy": "npm run build" // 배포 전에 빌드 프로세스를 자동으로 실행하여 최적화된 정적 파일을 생성
    },

4.  위에 단계를 완료하면 2번에 적었던 링크 경로로 들어가면 파일이 올라간 것을 볼 수있다
