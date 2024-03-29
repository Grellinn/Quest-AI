/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preseve that abilty, always export from Quest to regenerate this file.
 *   To setup props, bindings and actions, use the Quest editor
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import { styled } from '@mui/material/styles';

const ScreenDesktop = styled('div')({
  backgroundColor: `rgba(196, 196, 196, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `607px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
});

function Video(props) {
  return <ScreenDesktop className={props.className}></ScreenDesktop>;
}

export default Video;
