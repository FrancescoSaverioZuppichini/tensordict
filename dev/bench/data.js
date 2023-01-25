window.BENCHMARK_DATA = {
  "lastUpdate": 1674642047551,
  "repoUrl": "https://github.com/pytorch-labs/tensordict",
  "entries": {
    "GPU Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "vincentmoens@gmail.com",
            "name": "Vincent Moens",
            "username": "vmoens"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dcc7774f42cfddb2b7eb00e22f81b0d9427f45de",
          "message": "[CI] Benchmark on push to main",
          "timestamp": "2023-01-25T10:13:47Z",
          "tree_id": "320ab19be681c36df5163abfed391feb889fc579",
          "url": "https://github.com/pytorch-labs/tensordict/commit/dcc7774f42cfddb2b7eb00e22f81b0d9427f45de"
        },
        "date": 1674642045891,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 900.7986089700704,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.1101260481999986 msec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 241566.65444818427,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 4.139644200000703 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 115564.90285574384,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.653146200003903 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 44151.300803506114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 22.64938929999971 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 64590.95494491255,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 15.4820438999991 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 39217.886628637374,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 25.498569300003737 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 31786.530611502174,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.459866199998032 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 33323.34121838874,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.00899560000221 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 4067.4699369057107,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 245.8530770999971 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 31099.87342755864,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.154471699999476 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 20176.36202433429,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.56294890000095 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 24044.71512958556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.58918060000474 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 15343.756660244722,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 65.17308780000235 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 33962.46628529436,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 29.444269199996143 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 21687.64523795893,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 46.109201299998404 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 38378.50626801149,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.05625119999786 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 131117.09430461534,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 7.626770600001009 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 36610.104908813366,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 27.314863000003697 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 7629.1884409522745,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 131.07554069999878 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 28635.71444128886,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.921426599998995 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 8622.649464462835,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 115.97363479999672 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 18630.41520730728,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 53.675669000000426 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 7311.467602267376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 136.7714465000006 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 12920.063563408325,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 77.3990000197955 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1214.8396197160516,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 823.1539240000529 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 16702.903337070675,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 59.86983100001453 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2013.214671851454,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 496.71801719999854 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 1951.0848880992332,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 512.5353623000024 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}