/* istanbul ignore file */
import * as React from 'react';

/*
 * Copyright (c) 2015 instructure-react
 * Forked from https://github.com/aaronshaf/react-toggle/
 * + applied https://github.com/aaronshaf/react-toggle/pull/90
 * + rewritten in TypeScript by Alessia Bellisario
 **/

// Copyright 2015-present Drifty Co.
// http://drifty.com/
// from: https://github.com/driftyco/ionic/blob/master/src/util/dom.ts
function pointerCoord(
  event: React.TouchEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement>
) {
  // get coordinates for either a mouse click
  // or a touch depending on the given event
  if (event) {
    if ('changedTouches' in event && event.changedTouches.length > 0) {
      const touch = event.changedTouches[0];
      return { x: touch.clientX, y: touch.clientY };
    }
    if ('pageX' in event && event.pageX !== undefined) {
      return { x: event.pageX, y: event.pageY };
    }
  }
  return { x: 0, y: 0 };
}

type ToggleProps = {
  checked: boolean;
  icons: { checked: JSX.Element; unchecked: JSX.Element };
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultChecked?: boolean;
  previouslyChecked?: boolean;
  onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
};

type ToggleState = {
  checked: boolean;
  hasFocus: boolean;
};

export default class Toggle extends React.PureComponent<
  ToggleProps,
  ToggleState
> {
  public previouslyChecked: boolean;
  public hadFocusAtTouchStart: boolean;
  public touchStarted: boolean;
  public touchMoved: boolean;
  public startX: number | null;
  public startY: number | null;
  public moved: boolean;
  public input: HTMLInputElement | null;

  constructor(props: ToggleProps) {
    super(props);

    this.moved = false;
    this.input = null;
    this.startX = null;
    this.startY = null;
    this.touchStarted = false;
    this.touchMoved = false;
    this.hadFocusAtTouchStart = false;
    this.previouslyChecked = !!(props.checked || props.defaultChecked);
    this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false,
    };
  }

  public UNSAFE_componentWillReceiveProps(nextProps: ToggleProps) {
    if ('checked' in nextProps) {
      this.setState({ checked: !!nextProps.checked });
      this.previouslyChecked = !!nextProps.checked;
    }
  }

  public handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const checkbox = this.input;
    this.previouslyChecked = checkbox ? checkbox.checked : false;
    if (checkbox && event.target !== checkbox && !this.moved) {
      event.preventDefault();
      checkbox.focus();
      checkbox.click();
      return;
    }

    this.setState({ checked: checkbox ? checkbox.checked : false });
  };

  public handleTouchStart = (event: React.TouchEvent<HTMLInputElement>) => {
    this.startX = pointerCoord(event).x;
    this.touchStarted = true;
    this.hadFocusAtTouchStart = this.state.hasFocus;
    this.setState({ hasFocus: true });
  };

  public handleTouchMove = (event: React.TouchEvent<HTMLInputElement>) => {
    if (!this.touchStarted) {
      return;
    }
    this.touchMoved = true;

    if (this.startX != null) {
      const currentX = pointerCoord(event).x;
      if (this.state.checked && currentX + 15 < this.startX) {
        this.setState({ checked: false });
        this.startX = currentX;
      } else if (!this.state.checked && currentX - 15 > this.startX) {
        this.setState({ checked: true });
        this.startX = currentX;
      }
    }
  };

  public handleTouchEnd = (event: React.TouchEvent<HTMLInputElement>) => {
    if (!this.touchMoved) {
      return;
    }
    const checkbox = this.input;
    event.preventDefault();

    if (this.startX != null) {
      if (this.previouslyChecked !== this.state.checked && checkbox) {
        checkbox.click();
      }

      this.touchStarted = false;
      this.startX = null;
      this.touchMoved = false;
    }

    if (!this.hadFocusAtTouchStart) {
      this.setState({ hasFocus: false });
    }
  };

  public handleTouchCancel = () => {
    if (this.startX != null) {
      this.touchStarted = false;
      this.startX = null;
      this.touchMoved = false;
    }

    if (!this.hadFocusAtTouchStart) {
      this.setState({ hasFocus: false });
    }
  };

  public handleFocus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onFocus } = this.props;

    if (onFocus) {
      onFocus(event);
    }

    this.hadFocusAtTouchStart = true;
    this.setState({ hasFocus: true });
  };

  public handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { onBlur } = this.props;

    if (onBlur) {
      onBlur(event);
    }

    this.hadFocusAtTouchStart = false;
    this.setState({ hasFocus: false });
  };

  public getIcon = (type: 'checked' | 'unchecked') => {
    const { icons } = this.props;
    if (!icons) {
      return null;
    }
    return icons[type];
  };

  public render() {
    const { className, icons, ...inputProps } = this.props;
    const classes =
      'react-toggle' +
      (this.state.checked ? ' react-toggle--checked' : '') +
      (this.state.hasFocus ? ' react-toggle--focus' : '') +
      (this.props.disabled ? ' react-toggle--disabled' : '') +
      (className ? ' ' + className : '');
    return (
      <div
        className={classes}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        onTouchCancel={this.handleTouchCancel}
      >
        <div className="react-toggle-track">
          <div className="react-toggle-track-check">
            {this.getIcon('checked')}
          </div>
          <div className="react-toggle-track-x">
            {this.getIcon('unchecked')}
          </div>
        </div>
        <div className="react-toggle-thumb" />

        <input
          {...inputProps}
          ref={(ref) => {
            this.input = ref;
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className="react-toggle-screenreader-only"
          type="checkbox"
          aria-label="Switch between Dark and Light mode"
        />
      </div>
    );
  }
}
