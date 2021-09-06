import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const Typo = styled.div`
  color: white;
  ${(props) =>
    props.head &&
    `
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1rem;
  `};

  ${(props) =>
    props.content &&
    `
    font-weight: normal;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  `};
`;

function Insights() {
  return (
    <Wrapper>
      <Typo head>pointLight</Typo>
      <Typo content>
        ✏️ args로 넘어온 좌표값에다가 점을 찍고 해당 점으로 부터 빛을 쏜다.
      </Typo>
      <Typo content>
        ✏️ ex: &lt;pointLight position=&#123;[10, 10, 10]&#125;&gt;
      </Typo>
      <div style={{ height: "2rem" }} />
      <Typo head>Canvas</Typo>
      <Typo content>
        ✏️ Canvas는 내가 실제로 3d 객체를 놓을 공간과도 같은 것.
      </Typo>
    </Wrapper>
  );
}

export default Insights;
