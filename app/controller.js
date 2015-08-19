import Controller from 'cerebral';
import Model from 'cerebral-immutable-store';

const model = Model({
  isLoading: false,
  responses: []
});

const defaultInputs = {
  utils: {
    falcor: new falcor.Model({source: new falcor.HttpDataSource('/model.json')})
  }
};

export default Controller(model, defaultInputs);
