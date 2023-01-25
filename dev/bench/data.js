window.BENCHMARK_DATA = {
  "lastUpdate": 1674644560436,
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
    ],
    "CPU Benchmark Results": [
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
          "id": "d8a8cb08e2e75d72a54954870813598abed7b104",
          "message": "[Doc] Benchmark badge",
          "timestamp": "2023-01-25T10:59:21Z",
          "tree_id": "3fdfb08926fc6f281caa6dee0de495756bd4198f",
          "url": "https://github.com/pytorch-labs/tensordict/commit/d8a8cb08e2e75d72a54954870813598abed7b104"
        },
        "date": 1674644559183,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/common/common_ops_test.py::test_common_ops",
            "value": 1048.9616597117144,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 953.3236899000002 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation",
            "value": 177969.89984409793,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 5.618927699998721 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_empty",
            "value": 91045.06008488956,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 10.98357229999749 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_1",
            "value": 35569.34229586554,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 28.114098699998635 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_creation_nested_2",
            "value": 50123.65430331064,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 19.950660300000322 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_clone",
            "value": 37952.39626382542,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 26.348797399998602 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_setitem",
            "value": 31117.11320118376,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.13665719999881 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set",
            "value": 32562.07878916021,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 30.710569999999393 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_shared",
            "value": 6234.876830837438,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 160.3880922000002 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update",
            "value": 29674.712419912776,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 33.698725900001136 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_update_nested",
            "value": 19445.110590722114,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 51.4268095999995 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested",
            "value": 23854.816722847074,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 41.92025499999943 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/common_ops_test.py::test_set_nested_new",
            "value": 14415.090609432547,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 69.37174569999911 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_pytree",
            "value": 28780.202876656855,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 34.74610670000118 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_reshape_td",
            "value": 20054.11353867428,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 49.865081199999395 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_pytree",
            "value": 31307.33566753052,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 31.941395799998418 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_view_td",
            "value": 112740.44097476068,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 8.869931600000314 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_pytree",
            "value": 30649.90014553751,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 32.62653369999953 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_unbind_td",
            "value": 6900.0769496581415,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 144.92592000000002 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_pytree",
            "value": 25720.39925477422,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 38.879645299999765 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_split_td",
            "value": 8838.805787571235,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 113.1374558999994 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_pytree",
            "value": 23397.351880695605,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 42.73987949999878 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/common/pytree_benchmarks_test.py::test_add_td",
            "value": 8881.767716485963,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 112.59019960000103 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/distributed/distributed_benchmark_test.py::test_distributed",
            "value": 13549.951895207172,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 73.80100001341816 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_functorch",
            "value": 1205.3044440950023,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 829.6659030000058 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_instantiation_td",
            "value": 13740.579750512592,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 72.77713299998823 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_functorch",
            "value": 2532.6921870338792,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 394.8367689999998 usec\nrounds: 1"
          },
          {
            "name": "benchmarks/nn/functional_benchmarks_test.py::test_exec_td",
            "value": 2463.991605515702,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 405.8455385000002 usec\nrounds: 1"
          }
        ]
      }
    ]
  }
}