"use client"
import styled from 'styled-components';

export const Title = styled.h1`
  color: #fff;
  font-size: 22px;
`

export const Box = styled.div`
  width: 200px;
  height: 200px;
  padding: 40px;
  border-radius: 15px;
  background: #ccc;

  ${Box}:hover & {
    box-shadow: 0 4px 6px rgba(0,0,0,.6);
  }
`

const Styles = {
  Text: styled.p`
    color: #fff;
    font-size: 16px;
    font-weight: 300;
  `
}

export default function Home() {
  return (
    <main>
      <Box>
        <Title>Hello Next</Title>
        <Styles.Text>Siz NextJS bolimiga kirdingiz. Endilikda ong tarafdagi menyudan darsliklarni korishingiz mumkin.</Styles.Text>
      </Box>
    </main>
  )
}
