import Login from '../Login';
import { useSetRecoilState } from 'recoil';
import { Grid, Button, Typography } from '@mui/material';
import openPageAtom from '../../atoms/page';

export default function Main() {
  const setLoginOpen = useSetRecoilState(openPageAtom('login'));

  return (
    <div>
      <Login />
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        direction="column"
        flexWrap="nowrap"
        sx={{
          width: '580px',
          height: '404px',
          background: '#FFFFFF',
          borderRadius: '55px',
          textAlign: 'center'
        }}
      >
        <Grid item>
          <Typography
            variant="h1"
            fontFamily="'Slabo 27px'"
            align="center"
            color="secondary.main"
            pt={5}
            mb={5}
          >
            MAPLE LIFE
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            align="center"
            mb={5}
          >
            로그인을 하면 MAPLE LIFE의 서비스를 이용하실 수 있습니다
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => setLoginOpen(true)}
            sx={{
              color: 'background.default',
              backgroundColor: 'primary.main',
              justifyContent: 'center',
            }}
          >로그인 페이지로 이동</Button>
        </Grid>
      </Grid>
    </div >
  );
}
