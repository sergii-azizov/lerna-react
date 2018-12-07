import { bool, oneOfType, node, func } from 'prop-types';
import { omit } from 'lodash';

export default () => WrappedComponent => {
    const WithRender = props => (!props.rendered ? null : !props.hidden
            ? <WrappedComponent {...omit(props, ['rendered'])}>{props.children}</WrappedComponent>
            : <div hidden={props.hidden}>
                <WrappedComponent {...omit(props, ['rendered'])}>{props.children}</WrappedComponent>
            </div>
    );

    WithRender.propTypes = {
        hidden: bool,
        rendered: bool,
        children: oneOfType([node, func])
    };

    WithRender.defaultProps = {
        hidden: false,
        rendered: true,
        children: null
    };

    return WithRender;
};
