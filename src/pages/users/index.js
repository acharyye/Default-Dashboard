import ContentArea from '@/components/ContentArea';
import {Button} from 'antd';
import {history} from 'umi';

const Page = () =>
{
    return <ContentArea title={'Users'}>

        <Button type={'link'}
                onClick={() => history.push('/')}>Go back to Dashboard</Button>
    </ContentArea>;
};

export default Page;