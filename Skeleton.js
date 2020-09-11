/** @jsx jsx */
import { css, keyframes, jsx } from '@emotion/core';

export const defaultBaseColor = '#eee';

export const defaultHighlightColor = '#f5f5f5';

export const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const skeletonClass = css`
	background-color: ${defaultBaseColor};
	background-image: linear-gradient(
		90deg,
		${defaultBaseColor},
		${defaultHighlightColor},
		${defaultBaseColor}
	);
	background-size: 200px 100%;
	background-repeat: no-repeat;
	border-radius: 4px;
	display: inline-block;
	line-height: 1;
	width: 100%;
`;

export default function Skeleton({
	count,
	duration,
	width,
	wrapper: Wrapper,
	height,
	circle,
	className,
}) {
	const elements = [];

	for (let i = 0; i < count; i++) {
		elements.push(
			<span
				key={i}
				css={css`
					${skeletonClass} & {
						${height && `height: ${height}px;`}
						${width && `width: ${width}px;`}
						${width !== null && height !== null && circle && 'border-radius: 50%;'}
						animation: ${skeletonKeyframes} ${String(duration)}s ease-in-out infinite;
					}
				`}
				className={'react-loading-skeleton'}
			>
				&zwnj;
			</span>
		);
	}

	return (
		<span className={className}>
			{Wrapper
				? elements.map((element, i) => (
						// eslint-disable-next-line react/jsx-indent
						<Wrapper key={i}>
							{element}
							&zwnj;
						</Wrapper>
				  ))
				: elements}
		</span>
	);
}

Skeleton.defaultProps = {
	count: 1,
	duration: 1.2,
	width: null,
	wrapper: null,
	height: null,
	circle: false,
};
