import { SwaggerRouter } from 'koa-swagger-decorator';

const router = new SwaggerRouter();

router.swagger({
  title: 'Koa example',
  description: 'API DOC',
  version: '1.0.0',
  swaggerHtmlEndpoint: '/swagger',
});

router.mapDir(`${__dirname}/routes`, {
  doValidation: false,
  ignore: [
    '**/**.spec.ts',
    '**/**.test.ts',
    '**/__tests__/**',
  ],
});

export default router;
