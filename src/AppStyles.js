import styled from 'styled-components'

export const Container = styled.div`
min-height: 100vh;
display: grid;
grid-template-rows: 87px 1fr;
grid-template-columns: [full-start] minmax(6rem, 1fr) [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end] ) [center-end] minmax(6rem, 1fr) [full-stop];
`