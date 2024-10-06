(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[272],{4638:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/ffmpeg-video-editing-guide",function(){return i(5243)}])},5243:function(e,s,i){"use strict";i.r(s),i.d(s,{__toc:function(){return o}});var t=i(5893),n=i(2673),l=i(9756),r=i(9770);i(1502);var a=i(2643);let o=[{depth:3,value:"1. 동영상 포맷 변경",id:"1-동영상-포맷-변경"},{depth:3,value:"2. 포맷은 유지하면서 화질 변경",id:"2-포맷은-유지하면서-화질-변경"},{depth:3,value:"3. 동영상 화면 자르기(크롭, crop)",id:"3-동영상-화면-자르기크롭-crop"},{depth:3,value:"4. 구간 자르기(컷 편집)",id:"4-구간-자르기컷-편집"},{depth:3,value:"5. 여러 영상 합치기",id:"5-여러-영상-합치기"},{depth:3,value:"6. 동영상에서 소리만 추출해 MP3 만들기",id:"6-동영상에서-소리만-추출해-mp3-만들기"}];function c(e){let s=Object.assign({p:"p",h3:"h3",pre:"pre",code:"code",span:"span",ol:"ol",li:"li",hr:"hr"},(0,a.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"ffmpeg는 무료이면서도 강력한 동영상 편집 도구로 널리 사용되고 있습니다. 이번 포스팅에서는 ffmpeg를 사용하여 동영상 포맷을 변경하거나 화질을 조정하고, 화면을 크롭하거나 구간을 자르는 등 기본적인 작업을 수행해 봅니다. 여러 영상을 합치는 방법과 동영상에서 소리만 추출하는 만드는 방법도 함께 알아보겠습니다."}),"\n",(0,t.jsx)(s.h3,{id:"1-동영상-포맷-변경",children:"1. 동영상 포맷 변경"}),"\n",(0,t.jsx)(s.p,{children:"동영상 파일의 포맷을 변경하는 방법은 매우 간단합니다. ffmpeg의 기본 명령어를 사용해 입력 파일의 확장자와 출력 파일의 확장자를 지정해주기만 하면 됩니다."}),"\n",(0,t.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ffmpeg"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-i"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"input.mp4"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"output.avi"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "})]})}),"\n",(0,t.jsxs)(s.p,{children:["위 명령어는 ",(0,t.jsx)(s.code,{children:"input.mp4"}),"를 AVI 포맷으로 변환하여 ",(0,t.jsx)(s.code,{children:"output.avi"}),"로 저장합니다."]}),"\n",(0,t.jsx)(s.h3,{id:"2-포맷은-유지하면서-화질-변경",children:"2. 포맷은 유지하면서 화질 변경"}),"\n",(0,t.jsx)(s.p,{children:"동영상 화질을 낮추거나 높이기 위해 비트레이트를 조정할 수 있습니다. 비트레이트는 높을수록 화질이 좋아지지만 그만큼 파일 크기 커진다는 것을 참고해 주세요."}),"\n",(0,t.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ffmpeg"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-i"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"input.mp4"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-b:v"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"1000"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"k"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"output.mp4"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "})]})}),"\n",(0,t.jsxs)(s.p,{children:["이 명령어는 비트레이트를 1000kbps로 설정하여 ",(0,t.jsx)(s.code,{children:"output.mp4"}),"로 저장합니다."]}),"\n",(0,t.jsx)(s.h3,{id:"3-동영상-화면-자르기크롭-crop",children:"3. 동영상 화면 자르기(크롭, crop)"}),"\n",(0,t.jsxs)(s.p,{children:["영상의 특정 부분만 잘라내고 싶을 때는 ",(0,t.jsx)(s.code,{children:"-vf crop"})," 필터를 사용합니다. 다음 명령어는 640x480 크기로 화면을 잘라냅니다."]}),"\n",(0,t.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ffmpeg"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-i"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"input.mp4"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-vf"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"crop=640:480:100:50"'}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"output.mp4"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "})]})}),"\n",(0,t.jsx)(s.p,{children:"여기에서는 왼쪽으로부터 100px, 위로부터 50px을 시작점으로 640x480 크기를 잘라내어 비디오를 만듭니다."}),"\n",(0,t.jsx)(s.h3,{id:"4-구간-자르기컷-편집",children:"4. 구간 자르기(컷 편집)"}),"\n",(0,t.jsxs)(s.p,{children:["동영상의 특정 구간만 잘라내는 방법은 ",(0,t.jsx)(s.code,{children:"-ss"}),"(시작 시간)과 ",(0,t.jsx)(s.code,{children:"-to"}),"(끝 시간) 옵션을 사용합니다."]}),"\n",(0,t.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ffmpeg"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-i"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"input.mp4"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-ss"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"00"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:":01:00"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-to"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"00"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:":02:00"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-c"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"copy"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"output.mp4"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "})]})}),"\n",(0,t.jsxs)(s.p,{children:["이 명령어는 1분에서 2분 사이의 구간만 잘라 ",(0,t.jsx)(s.code,{children:"output.mp4"}),"로 저장합니다."]}),"\n",(0,t.jsx)(s.h3,{id:"5-여러-영상-합치기",children:"5. 여러 영상 합치기"}),"\n",(0,t.jsxs)(s.p,{children:["여러 동영상을 하나로 이어 붙여 합칠 때는 파일 목록을 ",(0,t.jsx)(s.code,{children:".txt"})," 파일로 만들어 이를 기반으로 처리합니다."]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"파일 목록을 만드세요:"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{"data-language":"text","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"text","data-theme":"default",children:[(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"file 'part1.mp4'"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"file 'part2.mp4'"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"file 'part3.mp4'"})}),"\n",(0,t.jsx)(s.span,{className:"line",children:(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"}})})]})}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"이어서 다음과 같이 실행하세요:"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ffmpeg"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-f"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"concat"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-safe"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-i"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"file_list.txt"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-c"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"copy"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"output.mp4"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "})]})}),"\n",(0,t.jsxs)(s.p,{children:["이렇게 하면 파일 목록에 나열된 동영상을 순서대로 이어 붙어 합쳐진 ",(0,t.jsx)(s.code,{children:"output.mp4"}),"이 생성됩니다."]}),"\n",(0,t.jsx)(s.h3,{id:"6-동영상에서-소리만-추출해-mp3-만들기",children:"6. 동영상에서 소리만 추출해 MP3 만들기"}),"\n",(0,t.jsxs)(s.p,{children:["동영상에서 오디오만 추출하려면 ",(0,t.jsx)(s.code,{children:"-vn"}),"(비디오 제외) 옵션을 사용하여 비디오를 제외하고 오디오만 남깁니다."]}),"\n",(0,t.jsx)(s.pre,{"data-language":"bash","data-theme":"default",children:(0,t.jsxs)(s.code,{"data-language":"bash","data-theme":"default",children:[(0,t.jsxs)(s.span,{className:"line",children:[(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"ffmpeg"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-i"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"input.mp4"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-vn"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"-acodec"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"mp3"}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(s.span,{style:{color:"var(--shiki-token-string)"},children:"output.mp3"})]}),"\n",(0,t.jsx)(s.span,{className:"line",children:" "})]})}),"\n",(0,t.jsx)(s.p,{children:"이렇게 함으로써 동영상에서 소리만 추출하여 MP3 파일로 만들 수 있습니다."}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:"ffmpeg는 무료이지만 매우 강력한 동영상 편집 도구로, 다양한 형식의 동영상 파일을 쉽게 변환하거나 편집할 수 있습니다. ffmpeg는 훨씬 많은 복잡한 기능을 갖고 있지만 우리가 자주 사용하게 되는 것만 일부 소개해 보았습니다. ffmpeg는 커맨드라인 기반(CLI)이라 사용이 다소 어려울 수 있지만 필요한 이용법만 기억했다 사용하면 GUI 기반 툴보다 오히려 편리할 수 있습니다."})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,a.a)(),e.components);return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)},pageOpts:{filePath:"pages/posts/ffmpeg-video-editing-guide.md",route:"/posts/ffmpeg-video-editing-guide",frontMatter:{title:"ffmpeg로 동영상 편집하기 - 포맷 변환부터 구간 자르기까지",date:"2024/10/6",description:"ffmpeg를 활용해 동영상 편집을 쉽게 할 수 있는 방법을 소개합니다. 동영상 포맷 변환, 화질 조정, 구간 자르기, 영상 합치기, 소리만 추출하기 등 다양한 작업을 설명합니다.",tag:"ffmpeg, 동영상 편집",author:"Emil Kwak"},pageMap:[{kind:"MdxPage",name:"index",route:"/",frontMatter:{type:"page",title:"About",date:"2024-09-22T00:00:00.000Z"}},{kind:"Folder",name:"posts",route:"/posts",children:[{kind:"MdxPage",name:"ffmpeg-video-editing-guide",route:"/posts/ffmpeg-video-editing-guide",frontMatter:{title:"ffmpeg로 동영상 편집하기 - 포맷 변환부터 구간 자르기까지",date:"2024/10/6",description:"ffmpeg를 활용해 동영상 편집을 쉽게 할 수 있는 방법을 소개합니다. 동영상 포맷 변환, 화질 조정, 구간 자르기, 영상 합치기, 소리만 추출하기 등 다양한 작업을 설명합니다.",tag:"ffmpeg, 동영상 편집",author:"Emil Kwak"}},{kind:"MdxPage",name:"how-to-deploy-nextjs-blog-on-github-pages",route:"/posts/how-to-deploy-nextjs-blog-on-github-pages",frontMatter:{title:"Next.js 블로그를 GitHub Pages에 배포하는 방법 (Blog Boilerplate 사용)",date:"2024/9/21",description:"Next.js Blog Boilerplate를 사용해 생성한 정적 블로그를 GitHub Pages에 배포하는 과정입니다. React 등 기타 요소를 깊숙히 다루지 않고도 간단하고 깔끔한 정적 블로그를 간편하게 제작할 수 있는 방법을 소개합니다.",tag:"Next.js, GitHub Pages",author:"Emil Kwak"}},{kind:"MdxPage",name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts",date:"2021-03-18T00:00:00.000Z"}},{kind:"MdxPage",name:"pd-crosstab-tutorial-with-example",route:"/posts/pd-crosstab-tutorial-with-example",frontMatter:{title:"pd.crosstab을 활용한 데이터 분석(신용등급 전이행렬 예제)",date:"2024/10/1",description:"pd.crosstab은 판다스에서 데이터를 요약해 교차표를 만들기 위해 사용하는 강력한 도구입니다. 여기에서는 pd.crosstab로 신용등급 전이행렬 예제로 그 사용법을 쉽게 설명합니다.",tag:"pandas, crosstab, 전이행렬",author:"Emil Kwak"}},{kind:"MdxPage",name:"vim-command-line-paste-guide",route:"/posts/vim-command-line-paste-guide",frontMatter:{title:"Vim에서 클립보드 내용을 명령줄에 붙여넣는 방법",date:"2024/9/22",description:"Vim에서 명령줄에 클립보드 내용을 효율적으로 붙여넣는 방법을 다룹니다. 복잡한 파일 경로나 명령어를 명령줄에 입력할 때, Vim에서 yank한 텍스트를 명령줄로 쉽게 붙여넣는 실용적인 방법을 소개합니다.",tag:"Vim",author:"Emil Kwak"}},{kind:"MdxPage",name:"vim-diff-two-files-guide",route:"/posts/vim-diff-two-files-guide",frontMatter:{title:"Vim에서 파일 비교하기(diffthis)",date:"2024/10/3",description:"Vim에서 두 개 또는 세 개 이상의 파일을 비교하기 위해서는 diffthis 명령어를 사용할 수 있습니다. 세 파일 이상을 비교할 때는 windo diffthis를 사용하면 보다 편리합니다.",tag:"Vim, diffthis, windo, 파일 비교",author:"Emil Kwak"}},{kind:"Meta",data:{"ffmpeg-video-editing-guide":"ffmpeg로 동영상 편집하기 - 포맷 변환부터 구간 자르기까지","vim-diff-two-files-guide":"Vim에서 파일 비교하기(diffthis)","pd-crosstab-tutorial-with-example":"pd.crosstab을 활용한 데이터 분석(신용등급 전이행렬 예제)","vim-command-line-paste-guide":"Vim에서 클립보드 내용을 명령줄에 붙여넣는 방법","how-to-deploy-nextjs-blog-on-github-pages":"Next.js 블로그를 GitHub Pages에 배포하는 방법 (Blog Boilerplate 사용)",index:"Posts"}}]},{kind:"Meta",data:{index:"About"}}],flexsearch:{codeblocks:!0},title:"ffmpeg로 동영상 편집하기 - 포맷 변환부터 구간 자르기까지",headings:o},pageNextRoute:"/posts/ffmpeg-video-editing-guide",nextraLayout:l.ZP,themeConfig:r.Z};s.default=(0,n.j)(d)},9770:function(e,s,i){"use strict";var t=i(5893),n=i(1822),l=i.n(n);let r=new Date().getFullYear();s.Z={footer:(0,t.jsxs)("footer",{className:"jsx-2447ca1c11803f07",children:[(0,t.jsxs)("small",{className:"jsx-2447ca1c11803f07",children:[(0,t.jsx)("time",{className:"jsx-2447ca1c11803f07",children:r})," \xa9 Namju Emil Kwak.",(0,t.jsx)("a",{href:"/feed.xml",className:"jsx-2447ca1c11803f07",children:"RSS"})]}),(0,t.jsx)(l(),{id:"2447ca1c11803f07",children:"footer.jsx-2447ca1c11803f07{margin-top:8rem}a.jsx-2447ca1c11803f07{float:right}"})]})}}},function(e){e.O(0,[647,888,774,179],function(){return e(e.s=4638)}),_N_E=e.O()}]);