import styled from "styled-components";

export const HeaderNav = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #fff;
  z-index: 10;
  line-height: 28px;

  .inner-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    .logo {
      border-right: 1px solid #fff;
      padding: 1rem;
      h4 {
       font-family: 'Londrina Solid', cursive;
        font-weight: 400;
      }
    }
    .toggle-button {
      align-items: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-right: 1rem;
      span {
        height: 2px;
        width: 20px;
        background: #fff;
        margin-bottom: 4px;
      }
    }
  }
`;
