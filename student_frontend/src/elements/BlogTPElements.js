import styled from "styled-components" 

export const BlogTPWrapper = styled.div`


.blog-template {
  padding: 5rem 0;
}

.blog-template h1,
.blog-template h2 {
  text-align: center;
}
.blog-template ul {
  margin-top: 2rem;
  display: inline-block;
}
.blog-template ul li {
  background: var(--clr-grey-9);
  color: var(--clr-grey-5);
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  text-transform: uppercase;
}

.blog-template blockquote {
  background: var(--clr-primary-9);
  border-radius: var(--radius);
  padding: 1rem;
  line-height: 2;
  color: var(--clr-primary-5);
  margin: 2rem 0;
}
.blog-template pre {
  background: #222;
  color: yellow;
  overflow-x: scroll;
  padding: 1rem 1.5rem;
  border-radius: var(--radius);
}
.blog-template img {
  width: 15rem;
  height: 15rem;
  margin: 3rem 0;
}

`