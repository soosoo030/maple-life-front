import { Button, Grid, Modal, Typography } from '@mui/material';
import { useSetRecoilState } from 'recoil';
import openPageAtom from '../../atoms/page';
import { ArrowForward } from '../../svg';

export default function LoginAnnounceModal({ open, closeModal }) {
  const setLoginOpen = useSetRecoilState(openPageAtom('login'));

  return (
    <Modal
      open={open}
      onClose={(evt, reason) => {
        // if (reason !== 'backdropClick') {
        closeModal();
        // }
      }}
      disableEscapeKeyDown
    >
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        direction="column"
        flexWrap="nowrap"
        sx={{
          maxWidth: 580,
          minWidth: 250,
          width: 0.75,
          background: 'white',
          borderRadius: '55px',
          py: 4,
          px: 2,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Grid item>
          <Typography
            variant="h1"
            fontFamily="'Slabo 27px'"
            align="center"
            color="secondary.main"
            sx={{
              fontSize: [36, 36, 54],
              mb: 3,
            }}
          >
            MAPLE LIFE
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align="center"
            mb={5}
            whiteSpace="pre-line"
          >
            로그인을 하면 MAPLE LIFE의 서비스를 이용하실 수 있습니다
          </Typography>
        </Grid>
        <Grid item>
          <Button
            onClick={() => {
              setLoginOpen(true);
              closeModal();
            }}
            sx={{
              color: 'background.default',
              backgroundColor: 'primary.main',
              justifyContent: 'center',
              px: 3,
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
            endIcon={<ArrowForward css={{ width: 22, fill: 'white' }} />}
            variant="contained"
          >
            로그인 페이지로 이동
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
}
