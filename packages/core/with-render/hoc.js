import { bool, oneOfType, node, func } from 'prop-types';
import { omit } from 'lodash';

export default () => WrappedComponent => {
    const WithRender = props => (true
            ? <WrappedComponent {...omit(props, ['rendered'])}>{props.children}</WrappedComponent>
            : <div hidden={props.hidden}>
                <WrappedComponent {...omit(props, ['rendered'])}>{props.children}</WrappedComponent>
            </div>
    );

    return WithRender;
};
